export default function Card({ title, children}) {
    return(
        <div className="bg-white dark:bg-zinc-900 p-4 rounded shadow-sm border 
        border-blue-600 dark:border-zinc-200 dark:text-zinc-500">
            { title && <h2 className="text-md font-semibold dark:text-white">{title}</h2>}
            {children}
        </div>
    )
}