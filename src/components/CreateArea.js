import React, { useState} from "react";

import { useFormik } from 'formik';
import * as Yup from 'yup';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
      author: "",
    content: "",
  });
  
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      content: '',
    },


    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      author: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      content: Yup.string().max(240).required('Required'),
    }),
      
    
    
    onSubmit: values => {
      console.log(values);
      const id = Date.now()
      const note = { ...values, id }
      props.setNotes([...props.notes, note])
    },
  });

  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
        <input
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder="Title"
          onBlur={formik.handleBlur}
              />

{formik.touched.title && formik.errors.title && <div>{formik.errors.title}</div>}
               <input
          name="author"
          onChange={formik.handleChange}
          value={formik.values.author}
          placeholder="Author"
          onBlur={formik.handleBlur}
        />
        {formik.touched.author && formik.errors.author && <div>{formik.errors.author}</div>}
        <textarea
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
          placeholder="Write a post..."
          rows="3"
          onBlur={formik.handleBlur}
        />
        {formik.touched.content && formik.errors.content && <div>{formik.errors.content}</div>}
        <button type="submit">Add</button>
      </form>

    </div>
  );
}

export default CreateArea;
