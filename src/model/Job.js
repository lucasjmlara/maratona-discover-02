let data = [
    {
        "id": 1,
        "name": 'Pizzaria Guloso',
        "daily-hours": 2,
        "total-hours": 60,
        "created-at": Date.now(),        
    },
    {
        "id": 2,
        "name": 'OneTwo Project',
        "daily-hours": 3,
        "total-hours": 2,
        "created-at": Date.now(),   
    },
];

module.exports = {
    get() {
        return data;
    }
}