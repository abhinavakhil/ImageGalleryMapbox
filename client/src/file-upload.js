import React, { Component } from "react";
import axios from "axios";

import "./file-upload.css";

class FileUpload extends Component {
  state = {
    imageName: "",
    height: "",
    width: "",
    extension: "",
    userName: "",
    image: "",
    lat: "",
    long: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("imageName", this.state.imageName);
    formData.append("height", this.state.height);
    formData.append("width", this.state.width);
    formData.append("extension", this.state.extension);
    formData.append("userName", this.state.userName);
    formData.append("image", this.state.image);
    formData.append("lat", this.state.lat);
    formData.append("long", this.state.long);

    try {
      await axios
        .post("http://localhost:5000/api/image-upload", formData, {})
        .then((res) => {
          alert("Image Uploaded Successfully!");
        });

      this.setState({
        imageName: "",
        height: "",
        width: "",
        extension: "",
        userName: "",
        image: "",
        lat: "",
        long: "",
      });
    } catch (err) {
      alert("Something Wrong Happened!");
    }
  };

  render() {
    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <form onSubmit={this.onSubmit}>
                <h4 className="text-center mt-4 mb-5 text">Upload An Image</h4>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Name of Image"
                    className="form-control"
                    name="imageName"
                    value={this.state.imageName}
                    onChange={(event) =>
                      this.setState({ imageName: event.target.value })
                    }
                    required
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="number"
                      placeholder="Enter Height of Image"
                      className="form-control"
                      value={this.state.height}
                      onChange={(event) =>
                        this.setState({ height: event.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="number"
                      placeholder="Enter Width of Image"
                      className="form-control "
                      value={this.state.width}
                      onChange={(event) =>
                        this.setState({ width: event.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Image Extensio, Only .png, .jpg and .jpeg format allowed!"
                    className="form-control"
                    value={this.state.extension}
                    onChange={(event) =>
                      this.setState({ extension: event.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="form-control"
                    value={this.state.userName}
                    onChange={(event) =>
                      this.setState({ userName: event.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label class="btn-bs-file btn btn-lg btn-light btn-block">
                    Browse
                    <input
                      type="file"
                      className="form-control"
                      onChange={(event) =>
                        this.setState({ image: event.target.files[0] })
                      }
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      placeholder="Enter latitude"
                      className="form-control"
                      value={this.state.lat}
                      onChange={(event) =>
                        this.setState({ lat: event.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      placeholder="Enter longitude"
                      className="form-control"
                      value={this.state.long}
                      onChange={(event) =>
                        this.setState({ long: event.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-danger btn-block">Upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;