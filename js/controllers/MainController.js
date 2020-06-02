app.controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
      {
        name: "Caprese",
        description: "Mozzarella, tomatoes, basil, balsmaic glaze.",
        price: 4.95,
      },
      {
        name: "Mozzarella Sticks",
        description: "Served with marinara sauce.",
        price: 3.95,
      },
      {
        Name: "Bruschetta",
        description: "Grilled bread garlic, tomatoes, olive oil.",
        price: 4.95,
      },
    ];
    $scope.mains = [
      {
        name: "Pizza Four Cheese",
        description:
          "Mozzarella, goat cheese, emmentaler, gorgonzola, tomato sauce",
        price: 6.9,
      },
      {
        name: "Pizza Hawaii",
        description: "Pineaple, ham, mozarella,  tomato sauce",
        price: 5.6,
      },
      {
        name: "Pizza Funghi",
        description: "Champignons, mozarella, oregano, tomato sauce",
        price: 4.25,
      },
    ];
    $scope.extras = [
      {
        name: "Breadsticks",
        description: "Served with marinara sauce.",
        price: 4.95,
      },
      {
        name: "Soup of the day",
        description: "Take a chance.",
        price: 4.95,
      },
      {
        name: "Buffalo wings",
        description: "Feel the power of wings.",
        price: 6.95,
      },
    ];
  },
]);
