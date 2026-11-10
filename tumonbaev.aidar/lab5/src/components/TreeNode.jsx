import React, {useState} from 'react';

export default function TreeNode({node}) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;

  return (
    <li className="tree-item" data-testid="tree-node">
      <div className="tree-row">
        {hasChildren ? (
          <button
            type="button"
            className="tree-toggle"
            data-testid="tree-toggle"
            aria-expanded={open}
            aria-label={open ? 'Скрыть' : 'Раскрыть'}
            onClick={() => setOpen(!open)}
          >
            {open ? '−' : '+'}
          </button>
        ) : (
          <span className="tree-spacer" />
        )}
        <span className="tree-label">{node.title}</span>
      </div>

      {hasChildren && open && (
        <ul className="tree-list" data-testid="tree-branch">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
