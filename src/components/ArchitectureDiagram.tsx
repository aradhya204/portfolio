import { motion } from 'framer-motion';
import { Tooltip } from '../Tooltip';

// Simple SVG diagram for the Distributed Rate Limiter & API Gateway architecture
// Nodes are wrapped with Tooltip for hover/click explanations
export const ArchitectureDiagram = () => {
  // Node definitions with positions and tooltip text
  const nodes = [
    { id: 'client', x: 50, y: 30, label: 'Client Request', tooltip: 'User initiates a request to the system' },
    { id: 'gateway', x: 250, y: 30, label: 'API Gateway (Middleware)', tooltip: 'Entry point that applies rate‑limiting logic' },
    { id: 'token', x: 250, y: 120, label: 'Token Bucket', tooltip: 'Allows burst traffic using a token pool' },
    { id: 'sliding', x: 250, y: 210, label: 'Sliding Window Log', tooltip: 'Tracks requests in a moving time window' },
    { id: 'fixed', x: 250, y: 300, label: 'Fixed Window Counter', tooltip: 'Counts requests per fixed interval' },
    { id: 'redis', x: 450, y: 170, label: 'Redis (Atomic Counters)', tooltip: 'Shared state store to coordinate limits across instances' },
    { id: 'instances', x: 650, y: 170, label: '3 Concurrent Gateway Instances', tooltip: 'Horizontal scaling of the gateway' },
    { id: 'allowed', x: 850, y: 100, label: 'Allowed ✅', tooltip: 'Request passes rate‑limit checks' },
    { id: 'blocked', x: 850, y: 240, label: 'Blocked ❌', tooltip: 'Request exceeds limits and is rejected' },
  ];

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
      <Arrow fromX={100} fromY={30} toX={250} toY={30} /> {/* client → gateway */}
      <Arrow fromX={300} fromY={30} toX={300} toY={120} /> {/* gateway → token */}
      <Arrow fromX={300} fromY={120} toX={300} toY={210} /> {/* token → sliding */}
      <Arrow fromX={300} fromY={210} toX={300} toY={300} /> {/* sliding → fixed */}
      <Arrow fromX={350} fromY={210} toX={450} toY={170} /> {/* sliding → redis */}
      <Arrow fromX={500} fromY={170} toX={650} toY={170} /> {/* redis → instances */}
      <Arrow fromX={700} fromY={170} toX={850} toY={100} /> {/* instances → allowed */}
      <Arrow fromX={700} fromY={170} toX={850} toY={240} /> {/* instances → blocked */}

      {/* Nodes */}
      {nodes.map((node) => (
        <Tooltip key={node.id} text={node.tooltip}>
          <motion.g
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            cursor="pointer"
          >
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
          </motion.g>
        </Tooltip>
      ))}
    </svg>
  );
};
