export default function Button({ textOnly, children, className, ...pros }) {
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ` ${className}`;

    return (
        <button {...pros} className={cssClasses}>{children}</button>
    )
}