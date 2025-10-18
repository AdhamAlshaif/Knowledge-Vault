import React, { useState } from 'react'

// Go over Antd button and form
import {Button,Form} from 'antd';

//import axios from 'axios';


function CreateNote() {

    const user = useSelector((state) => state.user);

    // This is where we will store the content of the note
    const [content,setContent]=useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        //this here will get the data that the user enter in the note page
        setContent(e.target.value);

        // look for a way to check if user is logged in
        
        
    }


  return (
    <div>

        <div>
            <div>
                <Title>Editor</Title>
            </div>
            <Form>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </Form>
        </div>


    </div>
  )

}

export default CreateNote