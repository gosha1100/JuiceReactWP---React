---
to: src/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.tsx
unless_exists: true
sh: pnpm prettier --write "src/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/*"
---

import React from 'react';

export type Props = {};

export function <%= h.changeCase.pascal(h.path.basename(name)) %>(props: Props) {
    return (
        <div className="<%= h.changeCase.paramCase(h.path.basename(name)) %>">
            <%= h.changeCase.pascal(h.path.basename(name)) %> Works!
        </div>
    )
}
