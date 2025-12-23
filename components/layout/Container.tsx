type ContainerSize = 'prose' | 'content' | 'layout' | 'wide';

interface ContainerProps {
    size?: ContainerSize;
    children: React.ReactNode;
    className?: string;
}

export function Container({
    size = 'content',
    children,
    className = ''
}: ContainerProps) {
    return (
        <div className={`container-${size} ${className}`}>
            {children}
        </div>
    );
}
