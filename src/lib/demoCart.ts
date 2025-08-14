import { demoProducts } from './demoProducts';
import type { Cart, CartLine } from './shopify/types';

// Demo cart state in localStorage
const DEMO_CART_KEY = 'demo-cart';

interface DemoCartLine {
  id: string;
  merchandiseId: string;
  quantity: number;
  productHandle: string;
}

export function getDemoCart(): Cart {
  if (typeof window === 'undefined') {
    return createEmptyCart();
  }

  const stored = localStorage.getItem(DEMO_CART_KEY);
  const demoLines: DemoCartLine[] = stored ? JSON.parse(stored) : [];
  
  const lines: CartLine[] = demoLines.map(line => {
    const product = demoProducts.find(p => p.variants[0].id === line.merchandiseId);
    const price = parseFloat(product?.priceRange.minVariantPrice.amount || '0');
    
    return {
      id: line.id,
      quantity: line.quantity,
      cost: {
        totalAmount: {
          amount: (price * line.quantity).toFixed(2),
          currencyCode: 'USD'
        }
      },
      merchandise: {
        id: line.merchandiseId,
        title: product?.variants[0].title || 'Default',
        selectedOptions: product?.variants[0].selectedOptions || [],
        product: product || demoProducts[0]
      }
    };
  });

  const subtotal = lines.reduce((sum, line) => 
    sum + parseFloat(line.cost.totalAmount.amount), 0
  );
  
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);

  return {
    id: 'demo-cart',
    checkoutUrl: '#',
    cost: {
      subtotalAmount: { amount: subtotal.toFixed(2), currencyCode: 'USD' },
      totalAmount: { amount: subtotal.toFixed(2), currencyCode: 'USD' },
      totalTaxAmount: { amount: '0', currencyCode: 'USD' }
    },
    lines,
    totalQuantity
  };
}

export function addToDemoCart(merchandiseId: string, quantity: number = 1): Cart {
  if (typeof window === 'undefined') {
    return createEmptyCart();
  }

  const stored = localStorage.getItem(DEMO_CART_KEY);
  const demoLines: DemoCartLine[] = stored ? JSON.parse(stored) : [];
  
  // Check if item already exists
  const existingIndex = demoLines.findIndex(line => line.merchandiseId === merchandiseId);
  
  if (existingIndex >= 0) {
    // Update quantity
    demoLines[existingIndex].quantity += quantity;
  } else {
    // Add new item
    const product = demoProducts.find(p => p.variants[0].id === merchandiseId);
    demoLines.push({
      id: `demo-line-${Date.now()}`,
      merchandiseId,
      quantity,
      productHandle: product?.handle || 'unknown'
    });
  }
  
  localStorage.setItem(DEMO_CART_KEY, JSON.stringify(demoLines));
  return getDemoCart();
}

export function removeFromDemoCart(lineId: string): Cart {
  if (typeof window === 'undefined') {
    return createEmptyCart();
  }

  const stored = localStorage.getItem(DEMO_CART_KEY);
  const demoLines: DemoCartLine[] = stored ? JSON.parse(stored) : [];
  
  const filteredLines = demoLines.filter(line => line.id !== lineId);
  localStorage.setItem(DEMO_CART_KEY, JSON.stringify(filteredLines));
  
  return getDemoCart();
}

export function updateDemoCartQuantity(lineId: string, quantity: number): Cart {
  if (typeof window === 'undefined') {
    return createEmptyCart();
  }

  const stored = localStorage.getItem(DEMO_CART_KEY);
  const demoLines: DemoCartLine[] = stored ? JSON.parse(stored) : [];
  
  const lineIndex = demoLines.findIndex(line => line.id === lineId);
  if (lineIndex >= 0) {
    if (quantity <= 0) {
      demoLines.splice(lineIndex, 1);
    } else {
      demoLines[lineIndex].quantity = quantity;
    }
  }
  
  localStorage.setItem(DEMO_CART_KEY, JSON.stringify(demoLines));
  return getDemoCart();
}

export function clearDemoCart(): Cart {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(DEMO_CART_KEY);
  }
  return createEmptyCart();
}

function createEmptyCart(): Cart {
  return {
    id: 'demo-cart',
    checkoutUrl: '#',
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'USD' },
      totalAmount: { amount: '0', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0', currencyCode: 'USD' }
    },
    lines: [],
    totalQuantity: 0
  };
}
