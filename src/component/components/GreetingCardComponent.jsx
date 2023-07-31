import React, { PureComponent } from "react";

export default class GreetingCardComponent extends PureComponent {
  render() {
    const { imageFile, handleBack, updateState, handleSubmit, title, name, content, showCard, showForm } = this.props;
    return (
      <div>
        <header>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <h1>Create a Greeting Card</h1>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="imageFile"
                id="image"
                accept="image/*"
                onChange={updateState}
                placeholder="Enter image url"
                required
              />{" "}
              <br />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={updateState}
                placeholder="Enter Title"
                required
              />{" "}
              <br />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={updateState}
                placeholder="Enter your Name"
                required
              />{" "}
              <br />
              <label htmlFor="content">Content</label>
              <input
                type="text"
                name="content"
                id="content"
                value={content}
                onChange={updateState}
                placeholder="Enter your Content"
                required
              />{" "}
              <br />
              <button type="submit" onClick={handleSubmit}>
                Create
              </button>
            </form>
          )}
        </header>

        {showCard && (
          // <div
          //   className="gcard"
          //   style={{ backgroundImage: `url(${imageUrl})` }}
          // >
          <div
            className="gcard"
            style={{
              backgroundImage: imageFile
                ? `url(${URL.createObjectURL(imageFile)})`
                : "",
            }}
          >
            <div className="gcard-text">
              <h5>Wishing you a </h5>
              <h2>{title}</h2>
              <h3> Dear {name}</h3>
              <p>{content}</p>
            </div>
            <button className="gcard-back" onClick={handleBack}>
              Back
            </button>
          </div>
        )}
      </div>
    );
  }
}