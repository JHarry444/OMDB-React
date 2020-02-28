npm i @types/jest enzyme enzyme-to-json enzyme-adapter-react-16

echo "import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });" > ./src/setupTests.js

npx json -I -f package.json -e 'this.jest={}'
npx json -I -f package.json -e 'this.jest.snapshotSerializers= [ "enzyme-to-json/serializer" ]'