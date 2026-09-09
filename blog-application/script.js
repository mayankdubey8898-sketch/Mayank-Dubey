// Hide all pages

function hidePages() {

    document.getElementById("home").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("createBlog").style.display = "none";
}


// Home

function showHome() {

    hidePages();

    document.getElementById("home").style.display = "block";
}


// Login

function showLogin() {

    hidePages();

    document.getElementById("login").style.display = "block";
}


// Register

function showRegister() {

    hidePages();

    document.getElementById("register").style.display = "block";
}


// Dashboard

function showDashboard() {

    hidePages();

    document.getElementById("dashboard").style.display = "block";
}


// Create Blog

function showCreateBlog() {

    hidePages();

    document.getElementById("createBlog").style.display = "block";
}


// Register function

function register() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;


    if (name == "" || email == "" || password == "") {

        alert("Please fill all fields");

        return;
    }


    if (password != confirmPassword) {

        alert("Passwords do not match");

        return;
    }


    alert("Registration successful!");

    showLogin();
}


// Login function

function login() {

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;


    if (email == "" || password == "") {

        alert("Please enter email and password");

        return;
    }


    alert("Login successful!");

    showDashboard();
}


// Create Blog function

function createBlog() {

    let title =
        document.getElementById("blogTitle").value;

    let category =
        document.getElementById("blogCategory").value;

    let content =
        document.getElementById("blogContent").value;


    if (title == "" || category == "" || content == "") {

        alert("Please fill all fields");

        return;
    }


    let blog = document.createElement("div");

    blog.className = "blog";


    blog.innerHTML = `
        <h3>${title}</h3>

        <p>${content}</p>

        <small>${category}</small>

        <br>

        <button onclick="deleteBlog(this)">
            Delete
        </button>
    `;


    document.getElementById("dashboardBlogs")
        .appendChild(blog);


    alert("Blog published successfully!");


    document.getElementById("blogTitle").value = "";

    document.getElementById("blogCategory").value = "";

    document.getElementById("blogContent").value = "";


    showDashboard();
}


// Delete Blog

function deleteBlog(button) {

    button.parentElement.remove();

    alert("Blog deleted!");
}