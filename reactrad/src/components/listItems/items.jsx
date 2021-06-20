import Item from '../item/item'
import '../listItems/listItems.css'
function ListItem() {
    return (
        <div className={"todo-wrapper"}>
            <div className={"todo-list-wrapper"}>
                <div className={"todo-header"}>
                <ul class="header-line header-Tags">
                    <li>Name</li>
                    <li>Created</li>
                    <li>Category</li>
                    <li>Content</li>
                    <li>Dates</li>
                </ul>
                <ul class="header-line-buttons">
                    <li><button id="button-archive"><img class="Delete_button" src="archive.png" alt=""></img></button> </li>
                    <li><button id="delete-button">
                            <img class="Delete_button" src="garbage.png" alt=""></img> </button></li>
                </ul>
                



                </div>

            <div class="todo-list">
            <Item></Item>


            </div>
            </div>

        </div>
    );
}

export default ListItem;
