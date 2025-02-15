createStringConnection("db_products", "André", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};inital_database= ${databaseName}`) // interpolação ajuda a colocar as strings
}