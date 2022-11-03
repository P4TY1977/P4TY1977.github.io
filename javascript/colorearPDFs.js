// JavaScript Document

var pdfs=document.getElementsByTagName("i")


var i
var padre

for(i=0;i<pdfs.length;i++)
{
	padre=pdfs[i].parentElement
	var href=null
	if(padre.hasAttribute("href"))
	{href=padre.getAttribute("href")}
	if(padre.firstElementChild.hasAttribute("href"))
	{href=padre.firstElementChild.getAttribute("href")}
	if(href!=null && href.includes(".pdf"))	
		pdfs[i].className+=" alert-danger"
	
	if(href!=null && href!="#" && !href.includes(".pdf") && pdfs[i].className=="fa fa-file-pdf-o")
		pdfs[i].className+=" alert-primary"
	if(href!=null && href.includes(".xls") && pdfs[i].className=="fa fa-file-excel-o")
		pdfs[i].className+=" alert-success"
	if(href!=null && ( href.includes(".zip") || href.includes(".rar") )&& pdfs[i].className=="fa fa-file-zip-o")
		pdfs[i].className+=" alert-warning"
	if(href!=null && href.includes(".doc") && pdfs[i].className=="fa fa-file-word-o")
		pdfs[i].className+=" alert-primary"
}