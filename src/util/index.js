const currencyFormatter = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export {currencyFormatter}