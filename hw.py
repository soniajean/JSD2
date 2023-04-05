person3 = { "pizza":["Deep Dish","South Side Thin Crust"],
"tacos":"Anything not from Taco bell",
"burgers":["Portillos Burgers"],
"ice_cream":["Chocolate","Vanilla","Oreo"],
"shakes":"Chocolate","dunkin":"Vanilla","culvers":"All of them",
"mcDonalds":"Sham-rock-shake","cupids_candies":"Chocolate Malt"
}
def display_object(person3):
    for key, value in person3.items():
        print(key, ":pizza", value)
print(person3)

