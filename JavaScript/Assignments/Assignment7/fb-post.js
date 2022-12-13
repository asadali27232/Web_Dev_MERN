let commentVisibility = false
let postCounter = 1

function commentHider(event) {
    let id = "#cs" + event.target.id
    if (commentVisibility) {
        document.querySelector(id.toString()).style.visibility = "hidden"
        document.querySelector(id.toString()).style.display = "none"
        commentVisibility = false
    } else {
        document.querySelector(id).style.visibility = "visible"
        document.querySelector(id).style.display = "flex"
        commentVisibility = true
    }
}
function commenting(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let id = "#cs" + event.target.id
        document.querySelector(id).innerHTML += `
                <div class="comment">
                                <div class="dp">
                                    <img
                                        src="dp.jpg"
                                        alt="dp"
                                        width="30px"
                                        height="30px"
                                    />
                                </div>
                                <div class="comment-text">
                                    <p>
                                        <span class="name-span">Asad Ali</span
                                        ><br />
                                        ${event.target.value}
                                    </p>
                                </div>
                            </div>`
        event.target.addEventListener("keypress", commenting)
    }
}
function callUploader(event) {
    document.getElementById("img-upload").click()
}
function upload(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const url = URL.createObjectURL(file)

    document.getElementsByClassName('post-container')[0].innerHTML += `
    <div class="post">
                        <div class="post-name">
                            <img
                                src="dp.jpg"
                                alt="dp"
                                width="40px"
                                height="40px"
                                id="dps"
                            />
                            <div class="name"><p>Asad Ali</p></div>
                        </div>
                        <div class="post-content">
                            <img
                                src="${url}"
                                alt=""
                                width="100%"
                            />
                        </div>
                        <div class="comment-count">
                            <p>1 like</p>
                            <p>1 comment</p>
                        </div>
                        <div class="post-line"></div>
                        <div class="post-btn">
                            <button onclick="like(event)">Like</button>
                            <button onclick="commentHider(event)" id="${postCounter}">Comment</button>
                            <button>Share</button>
                        </div>
                        <div class="post-line"></div>
                        <div class="comment-section" id="cs${postCounter}">
                            <div class="new-comment">
                                <div class="dp">
                                    <img
                                        src="dp.jpg"
                                        alt="dp"
                                        width="30px"
                                        height="30px"
                                    />
                                </div>
                                <div class="write-comment">
                                    <input
                                        id="${postCounter}"
                                        type="text"
                                        placeholder="Write a comment..."
                                        onkeypress="commenting(event)"
                                    />
                                </div>
                            </div>
                            <div class="comment">
                                <div class="dp">
                                    <img
                                        src="dp.jpg"
                                        alt="dp"
                                        width="30px"
                                        height="30px"
                                    />
                                </div>
                                <div class="comment-text">
                                    <p>
                                        <span class="name-span">Asad Ali</span
                                        ><br />
                                        Looking so great. Stay cool. Such a
                                        super cute pic this is. You're one of
                                        the best people I know on Facebook.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>`
    postCounter++
}
function like(event) {
    if (event.target.style.color == "rgb(55, 134, 245)")
        event.target.style.color = "rgb(165, 168, 171)"
    else
        event.target.style.color = "rgb(55, 134, 245)"
}       