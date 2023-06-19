import React, { useEffect, useState } from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { Button } from 'primereact/button';
import moment from 'moment'
import 'primeicons/primeicons.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";


function FilterTable({ data, tableTitle }) {
    const [columns, setColumns] = useState();

    console.log(data)
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const formatDate = (data) => {
        return moment(data.transaction.created * 1000).format('MMM D, YYYY')
    }

    const formatFirebaseDate = (data) => {
        return moment(data.member.created.seconds * 1000).format('MMM D, YYYY')
    }

    // need if statement to decide 1 to 2 years
    const formatMembershipExpDate = (data) => {
        return moment(data.member.membership_exp?.seconds * 1000).add(2, 'years').format('MMM D, YYYY')
    }

    const formatCurrency = (value) => {
        if (value === undefined) return
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const totalPaidBodyTemplate = (data) => {
        return formatCurrency(data.transaction.total_paid);
    };

    const priceBodyTemplate = (data) => {
        return formatCurrency(data.price);
    };

    const totalSalesBodyTemplate = (data) => {
        return formatCurrency(data.total_sales);
    };

    const renderHeader = () => {
        return (
            <div className="d-flex justify-content-between align-items-center">
                <h5 className='text-black mt-2 fs-4'>{tableTitle}</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };




    const header = renderHeader();
    useEffect(() => {
        if (tableTitle === "Transactions") {
            setColumns([
                { field: 'transaction.stripe_tx_id', header: "ID", sortable: "sortable" },
                { field: 'transaction.created', header: "Date", sortable: "sortable", body: formatDate },
                { field: 'transaction.display_name', header: "Name", sortable: "sortable" },
                { field: 'transaction.product_type', header: "Type", sortable: "sortable" },
                { field: 'transaction.product_name', header: "Product", sortable: "sortable" },
                { field: 'transaction.total_paid', header: "Total", sortable: "sortable", body: totalPaidBodyTemplate },
            ]);
        }
        if (tableTitle === "Members") {
            setColumns([
                { field: 'member.display_name', header: "Name", sortable: "sortable" },
                { field: 'member.email', header: "Email", sortable: "sortable" },
                { field: 'member.membership_type', header: "Membership", sortable: "sortable" },
                { field: 'member.membership_exp', header: "Expires", sortable: "sortable", body: formatMembershipExpDate },
                { field: 'member.created', header: "Member Since", sortable: "sortable", body: formatFirebaseDate },
            ]);
        }
        if (tableTitle === "Events") {
            setColumns([
                { field: 'event_name', header: "Name", sortable: "sortable" },
                { field: 'location', header: "Location", sortable: "sortable" },
                { field: 'price', header: "Price", sortable: "sortable", body: priceBodyTemplate },
                { field: 'total_sales', header: "Total Sales", sortable: "sortable", body: totalSalesBodyTemplate },
                { field: 'created', header: "Created", sortable: "sortable" },
                { field: 'event_date', header: "Event Date", sortable: "sortable" },
                { field: 'expired', header: "Completed", sortable: "sortable" },
            ]);
        }
    }, [])
    return (
        <div>
            <DataTable className='minor-shadow rounded' value={data} globalFilterFields={['transaction.stripe_tx_id', 'transaction.display_name', 'member.display_name', 'transaction.product_type', 'transaction.product_name', 'member.email', 'member.membership', 'event_name', 'location']} stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 30]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}" sortMode="multiple" removableSort header={header} filters={filters} filterDisplay="row" emptyMessage="No results found.">
                {columns?.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} sortable={col.sortable} body={col.body} />
                ))}
            </DataTable>
        </div>
    )
}

export default FilterTable