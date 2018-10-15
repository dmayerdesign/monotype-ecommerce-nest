// import { Cart } from '@mte/common/api/interfaces/cart'
// import { Product } from '@mte/common/api/interfaces/product'
// import { Currency } from '@mte/common/constants/enums/currency'
// import { CartDisplayItem } from '@mte/common/models/ui/cart-display-item'

export interface CartState /*extends Cart*/ {
    displayItems: /*CartDisplayItem<Product>[]*/any[]
}

export const initialCartState: /*CartState*/any = {
    count: 0,
    items: [],
    displayItems: [],
    subTotal: { amount: 0, currency: 'USD'/*Currency.USD*/ },
    total: { amount: 0, currency: 'USD'/*Currency.USD*/ },
    discounts: [],
}
