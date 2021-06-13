import React, {Component} from 'react'
import Welcomeprofile from './Welcomeprofile'


class Profile extends Component {


    constructor() {
        super()



        list=[
            {
                fullName: 'Rania ElHaj',
                bio: 'Biology major and currently learning Web developement at GoMyCode',
                profession: 'Knowledge seeker',
            }
        ]


    render () {
        return (
            <div>
            {this.list.map((el,i)=>
            <Welcomeprofile fullName={el.fullName} bio={el.bio} profession={el.profession}/>)}
            </div>
        )}
    }
}


export default Profile;