import logo from './logo.svg';
import './App.css';

function App() {
  const displayMenu = [
    {
      "label": "File",
      "icon": "fa fa-file-o",
      "items": [
        {
          "label": "New",
          "icon": "fa fa-plus",
          "items": [
            {
              "label": "Bookmark",
              "icon": "fa fa-bookmark"
            },
            {
              "label": "Video",
              "icon": "fa fa-video-camera"
            }
          ]
        },
        {
          "label": "Delete",
          "icon": "fa fa-trash",
        },
        {
          "separator": true
        },
        {
          "label": "Export",
          "icon": "fa fa-external-link-square",
        }
      ]
    },
    {
      "label": "Edit",
      "icon": "fa fa-pencil",
      "items": [
        {
          "label": "Left",
          "icon": "fa fa-align-left"
        },
        {
          "label": "Right",
          "icon": "fa fa-align-right"
        },
        {
          "label": "Center",
          "icon": "fa fa-align-center"
        },
        {
          "label": "Justify",
          "icon": "fa fa-align-justify"
        }
      ]
    },
    {
      "label": "Users",
      "icon": "fa fa-user",
      "items": [
        {
          "label": "New",
          "icon": "fa fa-user-plus"
        },
        {
          "label": "Delete",
          "icon": "fa fa-trash"
        },
        {
          "label": "Search",
          "icon": "fa fa-user",
          "items": [
            {
              "label": "Filter",
              "icon": "fa fa-filter",
              "items": [
                {
                  "label": "Print",
                  "icon": "fa fa-print"
                }
              ]
            },
            {
              "icon": "fa fa-bars",
              "label": "List"
            }
          ]
        }
      ]
    },
    {
      "label": "Events",
      "icon": "fa fa-calendar",
      "items": [
        {
          "label": "Edit",
          "icon": "fa fa-pencil",
          "items": [
            {
              "label": "Save",
              "icon": "fa fa-calendar-plus-o"
            },
            {
              "label": "Delete",
              "icon": "fa fa-calendar-minus-o"
            }
          ]
        },
        {
          "label": "Archieve",
          "icon": "fa fa-calendar-times-o",
          "items": [
            {
              "label": "Remove",
              "icon": "fa fa-calendar-minus-o"
            }
          ]
        }
      ]
    },
    {
      "separator": true
    },
    {
      "label": "Quit",
      "icon": "fa fa-power-off",
    }
  ]
  const generateMenu = (menu) => {
    console.log('menu', menu);
    let item = []
    menu && menu.map((data, index) => {
      console.log('data', data);
      item.push(
        data.label ?
          <li className={data.items ? "inner-menu" : ''}>
            <i className={data.icon} />
            {data.label}
            <ul className="inner-ul">
              {data.items && data.items !== undefined && generateMenu(data.items)}
            </ul>
          </li>
          : data.separator ? <hr></hr> : ''


      )
    });
    console.log('item', item);
    return item
  }
  // console.log(displayMenu);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="main-wrap">
          <div className="main-wrap-inner">
            <img className="main-img" src="https://wallpaperaccess.com/full/30100.jpg" />
            <ul className="main-ul">
              {generateMenu(displayMenu)}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
