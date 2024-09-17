import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1726552956~exp=1726556556~hmac=13f736a5db104f05ab9a2c55e3b1cc4970c7df47dbc14f434b92953abd9f1936&w=360",
      quantity: 1  
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://img.freepik.com/free-photo/smartphone-device-surrounded-by-nature-scene_23-2150165578.jpg?semt=ais_hybrid",
      quantity: 1  
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        rating: 4.09,
        stock: 34,
        brand: "samsung",
        category: "smartphones",
        thumbnail: "https://img.freepik.com/free-psd/smartphone-mock-up-isolated_1310-1525.jpg",
        quantity: 1  
    },
    {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        rating: 4.09,
        stock: 34,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://img.freepik.com/free-vector/realistic-style-new-smartphone-model_23-2148380821.jpg",
        quantity: 1  
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        rating: 4.09,
        stock: 34,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://img.freepik.com/free-photo/new-cell-phone-colorful-background_58702-4924.jpg",
        quantity: 1  
    },
    
  ],
  totalQuantity: 2,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    removeItem(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= action.payload.price;
      }
    },
    removeProduct(state, action) {
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        const removedItem = state.items.find(item => item.id === action.payload.id);
        
        state.totalQuantity -= removedItem.quantity;
        state.totalAmount -= removedItem.price * removedItem.quantity;
        state.items = filteredItems;
    },
    removeProduct(state, action) {
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        const removedItem = state.items.find(item => item.id === action.payload.id);
        
        state.totalQuantity -= removedItem.quantity;
        state.totalAmount -= removedItem.price * removedItem.quantity;
        state.items = filteredItems;
    },
    calculateTotals(state) {
      let totalQty = 0;
      let totalAmt = 0;
      state.items.forEach(item => {
        totalQty += item.quantity;
        totalAmt += item.price * item.quantity;
      });
      state.totalQuantity = totalQty;
      state.totalAmount = totalAmt;
    },
  },
});

export const { addItem, removeItem, calculateTotals,removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
