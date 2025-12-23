import { Role } from "@/data/about";

export function Timeline({ roles }: { roles: Role[] }) {
    return (
        <div className="space-y-12">
            {roles.map((role, index) => (
                <div key={index} className="relative pl-8 border-l border-border-subtle group">
                    {/* Dot indicator */}
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border-subtle group-hover:bg-accent transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                        <h3 className="text-lg font-bold">{role.company}</h3>
                        <span className="text-sm text-text-muted font-mono">{role.period}</span>
                    </div>

                    <div className="text-sm font-medium text-accent mb-3">{role.title}</div>

                    <p className="text-text-muted leading-relaxed max-w-prose">
                        {role.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
