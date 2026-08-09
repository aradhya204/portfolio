import { motion } from 'framer-motion';
// Tooltip component removed; using SVG <title> for hover info

// Simple SVG diagram for the Distributed Rate Limiter & API Gateway architecture
// Nodes are wrapped with Tooltip for hover/click explanations
export const ArchitectureDiagram = ({ nodes, edges }: { nodes: any[]; edges: { from: string; to: string }[] }) => {
  // Build a map for quick lookup
  const nodeMap = nodes.reduce((acc, node) => ({ ...acc, [node.id]: node }), {});

  // Helper to render an arrow line
  const Arrow = ({ fromX, fromY, toX, toY }: { fromX: number; fromY: number; toX: number; toY: number }) => (
    <motion.line
      x1={fromX}
      y1={fromY}
      x2={toX}
      y2={toY}
      stroke="#3B82F6"
      strokeWidth={2}
      markerEnd="url(#arrowhead)"
    />
  );

  return (
    <svg viewBox="0 0 900 350" className="w-full h-auto max-w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
        </marker>
      </defs>
      {/* Arrows between nodes */}
      {edges.map((e, i) => {
        const fromNode = nodeMap[e.from];
        const toNode = nodeMap[e.to];
        if (!fromNode || !toNode) return null;
        return (
          <Arrow
            key={i}
            fromX={fromNode.x}
            fromY={fromNode.y}
            toX={toNode.x}
            toY={toNode.y}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g
          key={node.id}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
        >
          <title>{node.tooltip}</title>
          <rect
            x={node.x - 60}
            y={node.y - 20}
            width={120}
            height={40}
            fill="#111827"
            stroke="#3B82F6"
            strokeWidth={2}
            rx={6}
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="13"
            fontFamily="system-ui, sans-serif"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
};
