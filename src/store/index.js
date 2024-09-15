import { reactive } from 'vue';

export const store = reactive({
  categories: [],
  category: {},
  categoryName: "",
  getTitle (id) {
    const availableCategories = {
      cat1: "Getting Started",
      cat2: "Chat With Customization",
      cat3: "Using the Dashboard",
      cat4: "Advanced Features",
      cat5: "Integrations",
      cat6: "JavaScript API",
      cat7: "E-commerce Integrations",
    };

    this.category = {
      title: availableCategories[id],
    };
  },
  setCategory (id) {
    this.category = this.categories.find(category => {
      if (category.id === id) {
        return category.description;
      }
    });
  },
});
