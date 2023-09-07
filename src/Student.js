import React from "react";
import "./Style.css";
  
const Student = () =>{
   return(
    <>
    <h1>STUDENT PAGE</h1>



    <button id='button'>Add new student</button>


      <table className='StudentTable'>

        <thead>
            <tr>
                <th className='name_head'>Name</th>
                <th className='re'>Age</th>
                <th className='re'>Cource</th>
                <th className='re'>Batch</th>
                <th>change</th>
            </tr>
        </thead>

        <hr />

        <tbody>
            <tr>
                <td>John</td>
                <td className='td1'>26</td>
                <td className='td'>MERN</td>
                <td className='td2'>October</td>
                <td className='td'>Edit</td>
            </tr>
        <hr />

            <tr>
                <td>Doe</td>
                <td className='td1'>25</td>
                <td className='td'>MERN</td>
                <td className='td2'>November</td>
                <td className='td'>Edit</td>
            </tr>
        <hr />
            
            <tr>
                <td>Biden</td>
                <td className='td1'>26</td>
                <td className='td'>MERN</td>
                <td className='td2'>Septebmer</td>
                <td className='td'>Edit</td>
            </tr>
            
        <hr />
            <tr>
                <td>Barar</td>
                <td className='td1'>22</td>
                <td className='td'>MERN</td>
                <td className='td2'>October</td>
                <td className='td'>Edit</td>
            </tr>
        <hr />
            <tr>
                <td>tdrist</td>
                <td className='td1'>23</td>
                <td className='td'>MERN</td>
                <td className='td2'>October</td>
                <td className='td'>Edit</td>
            </tr>
        <hr />
            <tr>
                <td>Elent</td>
                <td className='td1'>24</td>
                <td className='td'>MERN</td>
                <td className='td2'>November</td>
                <td className='td'>Edit</td>
            </tr>
        <hr />
            <tr>
                <td>Harshit Sharma</td>
                <td className='td1'>24</td>
                <td className='td'>MERN</td>
                <td className='td2'>October</td>
                <td className='td'>Edit</td>
            </tr>
        </tbody>
      </table>





    </>
   )

}

export default Student