import Table from '../components/Table';

export default function Employees() {
    return (
        <div>
            <h1>Finance</h1>
            <Table
                endpoint='payment'
                columns={['Payment ID', 'Service', 'Payment Month', 'Payment Status', 'Amount', 'Invoice No.', 'Invoice Date', 'Payment Date']}
                objectProperties={['payment_id', 'service', 'payment_for_month', 'payment_status', 'amount', 'invoice_no', 'invoice_date', 'payment_date']}
            />
        </div>
    )
}