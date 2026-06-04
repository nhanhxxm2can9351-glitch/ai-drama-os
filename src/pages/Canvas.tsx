import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Square,
  Circle,
  Diamond,
  Hexagon,
  Triangle,
  Star,
  MousePointer2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Trash2,
  Settings,
  Type,
  Palette,
  Layers,
  GripVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CanvasNode {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color: string;
}

interface NodeTemplate {
  type: string;
  label: string;
  icon: React.ReactNode;
  defaultWidth: number;
  defaultHeight: number;
  defaultColor: string;
}

const nodeTemplates: NodeTemplate[] = [
  { type: 'rectangle', label: '矩形', icon: <Square size={20} />, defaultWidth: 180, defaultHeight: 80, defaultColor: '#3B82F6' },
  { type: 'circle', label: '圆形', icon: <Circle size={20} />, defaultWidth: 100, defaultHeight: 100, defaultColor: '#10B981' },
  { type: 'diamond', label: '菱形', icon: <Diamond size={20} />, defaultWidth: 120, defaultHeight: 120, defaultColor: '#F59E0B' },
  { type: 'hexagon', label: '六边形', icon: <Hexagon size={20} />, defaultWidth: 140, defaultHeight: 120, defaultColor: '#8B5CF6' },
  { type: 'triangle', label: '三角形', icon: <Triangle size={20} />, defaultWidth: 120, defaultHeight: 100, defaultColor: '#EF4444' },
  { type: 'star', label: '星形', icon: <Star size={20} />, defaultWidth: 100, defaultHeight: 100, defaultColor: '#EC4899' },
];

const colorPresets = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
  '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
];

export default function Canvas() {
  const [nodes, setNodes] = useState<CanvasNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<CanvasNode | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [isDraggingNode, setIsDraggingNode] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [nodeOffset, setNodeOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent, template: NodeTemplate) => {
    e.dataTransfer.setData('nodeType', template.type);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const nodeType = e.dataTransfer.getData('nodeType');
    const template = nodeTemplates.find(t => t.type === nodeType);
    
    if (template && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - position.x) / scale;
      const y = (e.clientY - rect.top - position.y) / scale;

      const newNode: CanvasNode = {
        id: `node-${Date.now()}`,
        type: template.type,
        x: x - template.defaultWidth / 2,
        y: y - template.defaultHeight / 2,
        width: template.defaultWidth,
        height: template.defaultHeight,
        label: template.label,
        color: template.defaultColor,
      };

      setNodes(prev => [...prev, newNode]);
      setSelectedNode(newNode);
    }
  }, [position, scale]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current || (e.target as HTMLElement).classList.contains('canvas-bg')) {
      setSelectedNode(null);
      setIsPanning(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleCanvasMouseMove = useCallback((e: MouseEvent) => {
    if (isPanning) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    } else if (isDraggingNode && draggedNodeId) {
      const newX = (e.clientX - dragStart.x - nodeOffset.x) / scale;
      const newY = (e.clientY - dragStart.y - nodeOffset.y) / scale;
      
      setNodes(prev => prev.map(node => 
        node.id === draggedNodeId 
          ? { ...node, x: newX, y: newY }
          : node
      ));
    }
  }, [isPanning, isDraggingNode, dragStart, draggedNodeId, nodeOffset, scale]);

  const handleCanvasMouseUp = useCallback(() => {
    setIsPanning(false);
    setIsDraggingNode(false);
    setDraggedNodeId(null);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleCanvasMouseMove);
    window.addEventListener('mouseup', handleCanvasMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleCanvasMouseMove);
      window.removeEventListener('mouseup', handleCanvasMouseUp);
    };
  }, [handleCanvasMouseMove, handleCanvasMouseUp]);

  const handleNodeMouseDown = (e: React.MouseEvent, node: CanvasNode) => {
    e.stopPropagation();
    setSelectedNode(node);
    setIsDraggingNode(true);
    setDraggedNodeId(node.id);
    setDragStart({ x: e.clientX, y: e.clientY });
    setNodeOffset({
      x: (e.clientX - canvasRef.current!.getBoundingClientRect().left - position.x) - node.x * scale,
      y: (e.clientY - canvasRef.current!.getBoundingClientRect().top - position.y) - node.y * scale,
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.25), 4));
  };

  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const deleteSelectedNode = () => {
    if (selectedNode) {
      setNodes(prev => prev.filter(n => n.id !== selectedNode.id));
      setSelectedNode(null);
    }
  };

  const updateNodeProperty = (property: keyof CanvasNode, value: string | number) => {
    if (selectedNode) {
      const updatedNode = { ...selectedNode, [property]: value };
      setNodes(prev => prev.map(n => n.id === selectedNode.id ? updatedNode : n));
      setSelectedNode(updatedNode);
    }
  };

  const renderNodeShape = (node: CanvasNode) => {
    const baseStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      backgroundColor: node.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 600,
      fontSize: 14,
      userSelect: 'none',
    };

    switch (node.type) {
      case 'circle':
        return <div style={{ ...baseStyle, borderRadius: '50%' }}>{node.label}</div>;
      case 'diamond':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}>
            {node.label}
          </div>
        );
      case 'hexagon':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}>
            {node.label}
          </div>
        );
      case 'triangle':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            paddingTop: '20%',
          }}>
            {node.label}
          </div>
        );
      case 'star':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}>
            {node.label}
          </div>
        );
      default:
        return <div style={{ ...baseStyle, borderRadius: 8 }}>{node.label}</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 pt-16">
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Layers size={20} className="text-blue-500" />
            节点库
          </h2>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3">
            {nodeTemplates.map(template => (
              <div
                key={template.type}
                draggable
                onDragStart={(e) => handleDragStart(e, template)}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg cursor-grab hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-blue-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: template.defaultColor }}
                >
                  {template.icon}
                </div>
                <span className="text-sm text-gray-600">{template.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 提示：拖拽节点到画布上，可拖拽移动、滚轮缩放、按住空白处平移
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">缩放: {Math.round(scale * 100)}%</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScale(prev => Math.min(prev * 1.2, 4))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="放大"
            >
              <ZoomIn size={18} className="text-gray-600" />
            </button>
            <button
              onClick={() => setScale(prev => Math.max(prev * 0.8, 0.25))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="缩小"
            >
              <ZoomOut size={18} className="text-gray-600" />
            </button>
            <button
              onClick={resetView}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="重置视图"
            >
              <Maximize2 size={18} className="text-gray-600" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <button
              onClick={deleteSelectedNode}
              disabled={!selectedNode}
              className="p-2 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="删除选中节点"
            >
              <Trash2 size={18} className={selectedNode ? "text-red-500" : "text-gray-400"} />
            </button>
          </div>
        </div>

        <div
          ref={canvasRef}
          className="flex-1 relative overflow-hidden bg-gray-100"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onMouseDown={handleCanvasMouseDown}
          onWheel={handleWheel}
          style={{ cursor: isPanning ? 'grabbing' : 'default' }}
        >
          <div
            className="canvas-bg absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, #d1d5db 1px, transparent 1px)
              `,
              backgroundSize: `${20 * scale}px ${20 * scale}px`,
              backgroundPosition: `${position.x}px ${position.y}px`,
            }}
          />

          <div
            className="absolute"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: '0 0',
            }}
          >
            {nodes.map(node => (
              <motion.div
                key={node.id}
                layoutId={node.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`absolute cursor-move ${
                  selectedNode?.id === node.id
                    ? 'ring-2 ring-blue-500 ring-offset-2'
                    : ''
                }`}
                style={{
                  left: node.x,
                  top: node.y,
                  width: node.width,
                  height: node.height,
                }}
                onMouseDown={(e) => handleNodeMouseDown(e, node)}
              >
                {renderNodeShape(node)}
                {selectedNode?.id === node.id && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white rounded-lg shadow-lg px-2 py-1">
                    <GripVertical size={14} className="text-gray-400" />
                    <span className="text-xs text-gray-600">{node.label}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-4">
            <div className="bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
              <MousePointer2 size={14} className="text-gray-500" />
              <span className="text-sm text-gray-600">
                {nodes.length} 个节点
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Settings size={20} className="text-blue-500" />
            属性面板
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedNode ? (
              <motion.div
                key="selected"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-4 space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Type size={16} />
                    节点名称
                  </label>
                  <input
                    type="text"
                    value={selectedNode.label}
                    onChange={(e) => updateNodeProperty('label', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Palette size={16} />
                    颜色
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {colorPresets.map(color => (
                      <button
                        key={color}
                        onClick={() => updateNodeProperty('color', color)}
                        className={`w-8 h-8 rounded-lg transition-transform hover:scale-110 ${
                          selectedNode.color === color
                            ? 'ring-2 ring-offset-2 ring-gray-400'
                            : ''
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Settings size={16} />
                    尺寸与位置
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">X</label>
                      <input
                        type="number"
                        value={Math.round(selectedNode.x)}
                        onChange={(e) => updateNodeProperty('x', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Y</label>
                      <input
                        type="number"
                        value={Math.round(selectedNode.y)}
                        onChange={(e) => updateNodeProperty('y', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">宽度</label>
                      <input
                        type="number"
                        value={selectedNode.width}
                        onChange={(e) => updateNodeProperty('width', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">高度</label>
                      <input
                        type="number"
                        value={selectedNode.height}
                        onChange={(e) => updateNodeProperty('height', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={deleteSelectedNode}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                    删除节点
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <MousePointer2 size={28} className="text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm">
                  点击画布上的节点查看属性
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  从左侧拖拽节点到画布开始编辑
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
