export default function Dates({invoiceNumber,invoiceDate,dueDate})
{
    return(
        <article className="my-5 flex  items-end justify-end">
                <ul>
                    <li className="py-1 bg-gray-100"><span className="font-bold">Invoice number:</span>{invoiceNumber}</li>
                    <li className="py-1 bg-gray-100"><span className="font-bold">Invoice date:</span>{invoiceDate}</li>
                    <li className="py-1 bg-gray-100"><span className="font-bold">Due date:</span>{dueDate}</li>
                </ul>
        </article>
    )
}