export interface User {
    userId: string;
    email: string;
    name: string;
    wallet: Wallet;
    stocks: { [eventId: string]: Stock[] };
}

export interface Wallet {
    walletId: string;
    balance: number;
    locked: number;
}

export interface Stock {
    stockType: 'YES' | 'NO';
    stockId: string;
    quantity: number;
    price: number;
    locked: number;
    eventId: string;
    userId: string;
}

export interface Event {
    eventId: string;
    title: string;
    description: string;
    yes: number;
    no: number;
    isClosed: boolean;
    startTime: string;
    endTime: string;
    users: string[];
    tradeMatches: { [tradeId: string]: TradeMatch };
    orderBook: {
        yesSellOrders: { [price: number]: Order[] };
        noSellOrders: { [price: number]: Order[] };
        yesBuyOrders: { [price: number]: Order[] };
        noBuyOrders: { [price: number]: Order[] };
    },
    opinXFunds: number;
}

export interface Order {
    transacId: string;
    price: number;
    quantity: number;
    userId: string;
    orderType: 'BUY' | 'SELL';
    stockType: 'YES' | 'NO';
    stockId?: string;
    psuedo?: {
        isPsuedo: boolean;
        userId: string;
    };
}

export interface TradeMatch {
    tradeId: string;
    sellerId: string;
    buyerId: string;
    createdAt: string;
    stockType: 'YES' | 'NO';
    quantity: number;
    price: number;
}

export interface messageToQueue {
  userId: string;
  price: number;
  orderType: 'BUY' | 'SELL';
  quantity: number;
  stockType: 'YES' | 'NO';
  eventId: string;
  stockId?: string;
}

export interface processedMessage {
  eventId: Event['eventId']
  orderBook: Event['orderBook']
  success: boolean
  message?: string
}


export const payout: number = 1000;