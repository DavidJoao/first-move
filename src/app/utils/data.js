export const exampleData = [
  {
      "EQ": "¿Qué tipo de café te gustaría?",
      "EA": "Un café negro, por favor. | Un café con leche, por favor. | Un cappuccino, por favor. | Un latte, por favor. | Un americano, por favor.",
      "TQ": "What type of coffee would you like?",
      "TA": "A black coffee, please. | A coffee with milk, please. | A cappuccino, please. | A latte, please. | An americano, please."
  },
  {
      "EQ": "¿Lo quieres caliente o frío?",
      "EA": "Caliente, por favor. | Frío, por favor.",
      "TQ": "Do you want it hot or cold?",
      "TA": "Hot, please. | Cold, please."
  },
  {
      "EQ": "¿Qué tamaño quieres? ¿Pequeño, mediano o grande?",
      "EA": "Pequeño, por favor. | Mediano, por favor. | Grande, por favor.",
      "TQ": "What size would you like? Small, medium, or large?",
      "TA": "Small, please. | Medium, please. | Large, please."
  },
  {
      "EQ": "¿Quieres azúcar o endulzante?",
      "EA": "Azúcar, por favor. | Endulzante, por favor. | No, gracias.",
      "TQ": "Do you want sugar or sweetener?",
      "TA": "Sugar, please. | Sweetener, please. | No, thank you."
  },
  {
      "EQ": "¿Con leche entera, deslactosada, de almendra o de soya?",
      "EA": "Con leche entera, por favor. | Con leche deslactosada, por favor. | Con leche de almendra, por favor. | Con leche de soya, por favor.",
      "TQ": "With whole milk, lactose-free milk, almond milk, or soy milk?",
      "TA": "With whole milk, please. | With lactose-free milk, please. | With almond milk, please. | With soy milk, please."
  },
  {
      "EQ": "¿Deseas algún sabor adicional, como vainilla o caramelo?",
      "EA": "Vainilla, por favor. | Caramelo, por favor. | No, gracias.",
      "TQ": "Do you want any additional flavor, like vanilla or caramel?",
      "TA": "Vanilla, please. | Caramel, please. | No, thank you."
  },
  {
      "EQ": "¿Para tomar aquí o para llevar?",
      "EA": "Para tomar aquí, por favor. | Para llevar, por favor.",
      "TQ": "For here or to go?",
      "TA": "For here, please. | To go, please."
  },
  {
      "EQ": "¿Te gustaría algo más? ¿Un pan o un postre para acompañar?",
      "EA": "Sí, un pan, por favor. | Sí, un postre, por favor. | No, gracias.",
      "TQ": "Would you like anything else? A bread or dessert to accompany?",
      "TA": "Yes, a bread, please. | Yes, a dessert, please. | No, thank you."
  },
  {
      "EQ": "¿Cuántas dosis de espresso deseas?",
      "EA": "Una, por favor. | Dos, por favor. | Tres, por favor.",
      "TQ": "How many shots of espresso would you like?",
      "TA": "One, please. | Two, please. | Three, please."
  },
  {
      "EQ": "¿Con crema batida?",
      "EA": "Sí, por favor. | No, gracias.",
      "TQ": "With whipped cream?",
      "TA": "Yes, please. | No, thank you."
  },
  {
      "EQ": "¿Quieres agua o hielo extra?",
      "EA": "Agua extra, por favor. | Hielo extra, por favor. | No, gracias.",
      "TQ": "Do you want extra water or ice?",
      "TA": "Extra water, please. | Extra ice, please. | No, thank you."
  },
  {
      "EQ": "¿Te gustaría añadir canela o cacao encima?",
      "EA": "Canela, por favor. | Cacao, por favor. | No, gracias.",
      "TQ": "Would you like to add cinnamon or cocoa on top?",
      "TA": "Cinnamon, please. | Cocoa, please. | No, thank you."
  },
  {
      "EQ": "¿Es todo por ahora?",
      "EA": "Sí, eso es todo, gracias. | No, también quiero añadir algo más.",
      "TQ": "Is that all for now?",
      "TA": "Yes, that's all, thank you. | No, I would also like to add something else."
  },
  {
      "EQ": "¿Cómo deseas pagar? ¿Con efectivo o tarjeta?",
      "EA": "Con efectivo, por favor. | Con tarjeta, por favor.",
      "TQ": "How would you like to pay? With cash or card?",
      "TA": "With cash, please. | With card, please."
  },
  {
      "EQ": "¿Quieres el recibo?",
      "EA": "Sí, por favor. | No, gracias.",
      "TQ": "Do you want the receipt?",
      "TA": "Yes, please. | No, thank you."
  }
]

export const dataArray = Object.values(exampleData).map(value => {
  return {
      ...value,
  };
});