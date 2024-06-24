import React from 'react';
import React, { useState } from 'react';
import { useSelector } from "react-redux";

const URL = '';

export const LIL=()=> {
    //משתנה בוליאני שמטרתו היא מתי להציג את טופס רשומה חדשה
    const [showFormNew, setShowFormNew] = useState(false);
    //עריכת רשומה
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    //רשומה חדשה
    const [newRec, setNewRec] = useState({
        name: '',
        desc: '',
    })
    //צריך לשמור את הכניסה לרשימה בסטייט כדי שנדע איפה אנחנו
    //כלומר כאשר נבע עידכון כיצד נדע באיזה רשימה אנחנו כעת 
    //?לאיזה רשימה נבצע עידכון
    const token =useSelector(state => state.list.token);

    //הצגת הרשימה
    //punc onInit that show list 
    //   state או הSTORמכילה קריאת שרת שמבקש לפי ה
    //שולחת קריאת שרת פלוס הסטור ומחזירה את התשובה לתוך רספונז
    
    //שמירת הרשומה החדשה
    const Save = () => {
        const URL = " ";
        fetch(URL + token,
            {
                body: JSON.stringify({ ...newRec }),
                // איזה סוג הקריאה
                method: 'POST',
                // מילים שמורות שצריך להוסיף לבקשות לשרת
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {

            if (res.ok) {
                {"נוסף בהצלחה!!"}
            }
        })
    }

    const Update = () => {//מקבל משהו?
        const URL = " ";
        fetch(URL + token ,//+?איך השרת מצפה לקבל רשימה פנימית לעריכה
            {
                body: JSON.stringify({ ...newRec }),
                // איזה סוג הקריאה
                method: 'PUT',
                // מילים שמורות שצריך להוסיף לבקשות לשרת
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {

            if (res.ok) {
                {"עודכן בהצלחה!!"}
            }
        })
    }
    

    const deleted = (id) => {
        fetch(URL + '' + id, {//להוסיף את שם הפונקציה
           method: 'DELETE',
   
       }).then(res => {
           if(res.ok){
               alert('DELETE!!!');
               setDeletdIndex(id);
               refresh();
           }
           else {
               alert('failed to DELETE!!!, try again');
           }
       }).catch(e => {
           alert('failed to DELETE!!!, try again');
       });
       };

    const handleShowFormNew = () => {
        setShowFormNew(true); 
      };
 
    return( 
        <div>
             
            <button onClick={handleShowFormNew}>add new</button>
            { showFormNew && (
                <form onSubmit={newRecord}>
                    <label> name:<input id='inputRec' type='text' value={newRec.name} onChange={(e) => setNewRec({ ...newRec, name: e.target.value })} /></label> <br />
                    <label>description:<input id='inputRec' type='text' value={newRec.name} onChange={(e) => setNewRec({ ...newRec, name: e.target.value })} /> </label><br />
                    <button type="submit" onClick={() => Save()}>save</button>    
                </form>
            )};
            {/*  קוד שמקבל רשימה מהשרת וממפה אותה לצורך הדפסה*/}
            {/* PUBLISHER לוקח את מה שחזר מהשרת במקרה הזה צריך לקחת את רשימת ה */}
             <div id='list' className="record">
                <div>-</div>
                {myList.map((record) => (
                    <div>{record.name}+{record.desc}
                        <button onClick={Update()}>update</button><button onClick={deleted(state.idin)}>delete</button>
                    </div>
                ))}
            </div>

        
        </div>
    )
}

//0556770538 AvitalP Developer
