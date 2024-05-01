import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'HoidanIt', age: 16 },
            { id: 2, name: 'Eric', age: 26 },
            { id: 3, name: 'HarryPhamDev', age: 29 },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers] // Dấu ... mang nghĩa data trước đó của listUsers
        })
    }

    //JSX
    render() {
        return (
            <div>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser} // ko có dấu () tại hàm, vì nếu thêm thì se hiểu là thực hiện ngay tại đó
                />
                <br /><br />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;