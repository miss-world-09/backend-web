/* DOM: DOM TREE REFERS TO AN HTML PAGE WHERE ALL THE NODES ARE OBJECT. THERE ARE THREE TYPES OF NODES IN A DOM:-
1. TEXT NODES
2. ELEMENT NODES
3. COMMENT NODES
IN A HTML PAGE <HTML> IS ROOT AND <HEAD> AND <BODY> ARE ITS CHILDREN. 
A TEXT NODE IS ALWAYS A LEAF OF THE TREE.

WALKING THE DOM:
<HTML>
<HEAD>                    (DOCUMENT.HEAD)
<TITLE>HELLO</TITLE>      (DOCUMENT.BODY)-> PAGE BODY TAG
</HEAD>                   (DOCUMENT.DOCUMENTELEMENT)->PAGE HTML TAG
<BODY>

</BODY>
</HTML>
*/

/* CHILDREN OF AN ELEMENT :- DIRECT AS WELL AS DEEPLY NESTED ELEMENTS OF AN ELEMENT ARE CALLED ITS CHILDREN.
CHILD NODES: ELEMENTS THAT ARE DIRECT CHILDREN. FOR EXAMPLE: HEAD AND BODY OF CHILDREN OF <HTML>.
DESCENDANTS NODES:ALL NESTED ELEMENTS, CHILDREN,THEIR CHILDREN AND SO ON.

FIRST CHILD,LAST CHILD AND CHILD NODES:
element.firstchild->first child element.
element.lastchild->last child element
element.childnodes->all child nodes.

DOMS COLLECTIONS:
THEY ARE READ ONLY.
THEY ARE LIVE ELEMENT CHILD NODES VARIABLE WILL AUTOMATICALLY UPDATE IF CHILD NODES OF ELEMENTS ARE CHANGES.
THEY ARE ITERABLE USING FOR.. OF LOOP

SIBLING AND PARENT CLASS:
SIBLING ARE NODE THAT ARE CHILDREN OF SAME PARENT.
FOR EXAMPLE:- <HEAD> AND <BODY> ARE SIBLING BECAUSE THEY SHARE SAME PARENT.
<BODY> IS SAID TO BE THE "NEXT" OR "RIGHT" SIBLING OF <HEAD>
THE NEXT SIBLING IS IN nextSibling property and previous one is in previousSibling property.
*/
 alert(document.documentelement.parentNode);   /*document*/
 alert(document.documentElement.parentElement);  /*Null*/

 