import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Typography } from 'antd' // keep only what you need
import './CreateNote.css' // Import the CSS file

function CreateNote() {
  const [content, setContent] = useState('')
  const [summarized, setSummarized] = useState("Not implemented yet")


  // use Form's onFinish (Antd) — doesn't receive an event
  const onFinish = async () => {
    try {
      await axios.post('/api/notes/createNote', content)
      setContent('')
    } catch (err) {
      console.error('save failed', err.response?.data ?? err.message)
    }
  }

  return (
    <div className="main-container">
      <div className="note-title">
        {/*when user first create a note page they will enter a name for it. 
        This name will go here */}
        <Typography.Title level={1}>Title</Typography.Title>
      </div>

      {/* use Antd Form onFinish and Antd Button htmlType="submit" */}
      <Form onFinish={onFinish} className="main-form">
        <textarea
          className="text-area"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          placeholder="Write your note..."
        />
        <div className="save-button">
          <Button type="primary">Save</Button>
        </div>
      </Form>

      {/* 
        will replace this with a button that asks if the user wants to summarize the notes
        if user clicks it an ai api will be called and print out the content instead of "Nothing typed yet"
       */}
      <div className="preview">
        <Button>summarize</Button>
        <div className="preview-box">
          {summarized || <span className="muted">Nothing typed yet</span>}
        </div>
      </div>
    </div>
  )
}

export default CreateNote