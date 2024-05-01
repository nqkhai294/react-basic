import React from "react";
import './DisplayInfo.scss'

class DisplayInfo extends React.Component {

    state = {
        isShowListUsers: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }


    render() {
        //destructuring array/object
        const { listUsers } = this.props;
        // props: viết tắt của properties

        return (
            //Ta có thể dùng vòng lặp để có thể in ra 3 Object. Lặp với hàm Map
            <div className='display-info-container'>
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUsers ? "Hide list Users" : "Show list Users"}
                        </button>
                </div>




                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 26 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>}
            </div>


        )
    }
}

export default DisplayInfo;