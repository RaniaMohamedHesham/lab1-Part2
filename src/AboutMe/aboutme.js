import { Component} from "react";
import jsPDF from "jspdf";
import logo from '../img/Pict.jpg'
import footer from '../footer/footer'
import header from '../Header/header'
import portofolio from '../Portofolio/portofolio'
import skills from '../Skills/skills'

export default class About extends Component {
    pdfGenerate=()=>{

        var doc =new jsPDF('landscape','px','a4','false');
        doc.addImage(logo,'PNG',65,20,400,400)
        doc.save('pic.pdf')
    }
render(){
    return(
    <>
    <hr></hr>
    <h1 className="container my-3">About Me</h1>
    <p className="text-right">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <div style={{textAlign:'center'}}>
    <button className="btn btn-primary" onClick={this.pdfGenerate} >Download PDF</button>
    </div>
    <hr></hr>
    </>
);


}
}