export const state = () => ({
    cart: []
  })
  
  export const mutations = {
    addtoproducts(state, card) {
      state.cart.push(card)
    },
    remove_from_products(state, index) {
      state.cart.splice(index, 1)
    },
    clear_basket(state) {
      state.cart = []
    }
  }
  
  export const getters = {
    cartItems: (state) => state.cart,
    cartItemCount: (state) => state.cart.length
  }
  