import DashBoard from './Dashboard';
import NewEditor from './NewEditor';
import UpdateBlogPost from './BlogPost/UpdateBlogPosts';
import UpdateDoughnutChart from './DoughnutChart/UpdateDoughnutChart';
import AddDoughnutChart from './DoughnutChart/AddDoughnutChart';
import NewPostForm from './BlogPost/NewPostForm';
import AddLineBarChart from './LineBarChart/AddLineBarChart';
import UpdateLineBarChart from './LineBarChart/UpdateLineBarChart';

const renderActiveButton = (activeButton) => {
  let item;
  if (activeButton === 'dashboard') {
    item = <DashBoard />;
  } else if (activeButton === 'newArticle') {
    item = <NewPostForm />;
  } else if (activeButton === 'UpdateBlogPost') {
    item = <UpdateBlogPost />;
  } else if (activeButton === 'addLineBarChart') {
    item = <AddLineBarChart />;
  } else if (activeButton === 'updateLineBarChart') {
    item = <UpdateLineBarChart />;
  } else if (activeButton === 'addDoughnutChart') {
    item = <AddDoughnutChart />;
  } else if (activeButton === 'updateDoughnutChart') {
    item = <UpdateDoughnutChart />;
  } else if (activeButton === 'add-admin') {
    item = <NewEditor />;
  }
  return item;
};

export default renderActiveButton;
