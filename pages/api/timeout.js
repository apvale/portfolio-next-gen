export default function handler(req, res) {
  setTimeout(function () {
    res.status(200).json({message: 'Timeout set'})
  }, 5000); 
}
