/**
 * @param {String} route - route with dynamic values market by ":"
 * @param {String} realRoute - real route 
 */

const routeWithDynamicValues = (route, realRoute) => {

    let routeArray = route.split("/")
    let realRouteArray = realRoute.split("/")

    if (routeArray.length !== realRouteArray.length) return false

    let isRoute = false

    for (let index = 0; index < routeArray.length; index++) {
        if ((routeArray[index] === realRouteArray[index]) || (routeArray[index].includes(":") && !isNaN(realRouteArray[index]))) {
            isRoute = true
        }
        else {
            isRoute = false;
            break;
        }
    }

    return isRoute

}
module.exports = routeWithDynamicValues;