import React, { useState } from 'react'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { Button } from 'primereact/button';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import moment from 'moment'

function FilterTable({tableTitle}) {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const formatDate = (data) => {
        return moment(data.created * 1000).format('M.D.YY')
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (data) => {
        return formatCurrency(data.total_paid);
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


    const data = [
        {
            id: 1,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "bobby keel",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 120.1
        },
        {
            id: 2,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "penelope forester",
            product_type: "membership",
            product_name: "regular member 1 year - $170",
            created: 1687137163,
            total_paid: 130.1
        },
        {
            id: 3,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "amy jerry",
            product_type: "event",
            product_name: "met gala",
            created: 1700374352,
            total_paid: 89.1
        },
        {
            id: 4,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "jerry porter",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 65.1
        },
        {
            id: 1,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "bobby keel",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 120.1
        },
        {
            id: 2,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "penelope forester",
            product_type: "membership",
            product_name: "regular member 1 year - $170",
            created: 1687137163,
            total_paid: 130.1
        },
        {
            id: 3,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "amy jerry",
            product_type: "event",
            product_name: "met gala",
            created: 1700374352,
            total_paid: 89.1
        },
        {
            id: 4,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "jerry porter",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 65.1
        },
        {
            id: 1,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "bobby keel",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 120.1
        },
        {
            id: 2,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "penelope forester",
            product_type: "membership",
            product_name: "regular member 1 year - $170",
            created: 1687137163,
            total_paid: 130.1
        },
        {
            id: 3,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "amy jerry",
            product_type: "event",
            product_name: "met gala",
            created: 1700374352,
            total_paid: 89.1
        },
        {
            id: 4,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            user_name: "jerry porter",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 65.1
        }
    ]

    const header = renderHeader();

    return (
        <div>
            <DataTable value={data} globalFilterFields={['stripe_tx_id', 'user_name', 'product_type', 'product_name']} stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 30]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}" sortMode="multiple" removableSort header={header} filters={filters} filterDisplay="row" emptyMessage="No results found.">
                <Column field='stripe_tx_id' header="ID" sortable />
                <Column field='created' header="Date" body={formatDate} sortable />
                <Column field='user_name' header="Name" sortable />
                <Column field='product_type' header="Type" sortable />
                <Column field='product_name' header="Product" sortable />
                <Column field='total_paid' header="Total" body={priceBodyTemplate} sortable />
            </DataTable>
        </div>
    )
}

export default FilterTable