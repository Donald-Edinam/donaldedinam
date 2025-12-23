import { StackItem } from "@/data/about";

export function StackList({ stack }: { stack: StackItem[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stack.map((group) => (
                <div key={group.category}>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">
                        {group.category}
                    </h3>
                    <ul className="space-y-2">
                        {group.items.map((item) => (
                            <li key={item} className="text-text-primary">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
