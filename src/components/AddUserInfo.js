import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Khai',
        address: 'Hoi dan IT',
        age: 20
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value // lấy giá trị ô input đang nhập
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value // lấy giá trị ô input đang nhập
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // Hàm để ko load lại trang
    
        this.props.handleAddNewUser({
            id: 'hardcode',
            name: this.state.name,
            age: this.state.age
        });
    }


    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}


                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    
                    <label>YourName:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />

                    <label>YourAge:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo;