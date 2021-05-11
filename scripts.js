const boot = document.getElementById("boot");
const update = document.getElementById("update")
const shutdown = document.getElementById("shutdown")



function pleaseBoot() {
    console.log("Please boot!");
    Intercom('boot', {  
        app_id: 'uppz7mn6',  
        email: 'john.doe@example.com',
        created_at: 1234567890,
        name: 'Johnnnnn Doe',
        user_id: '9876'
    });
}

function pleaseUpdate() {
    console.log("Please update!");
    Intercom('update', {"name": "Inigo Montoya"});
}

function pleaseShutdown() {
    console.log("Please shutdown!");
    Intercom('shutdown');
}

boot.addEventListener('click', pleaseBoot);
update.addEventListener('click', pleaseUpdate);
shutdown.addEventListener('click', pleaseShutdown);