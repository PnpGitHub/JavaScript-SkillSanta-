function strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}
//str='<p><strong><em>SkillSantaAssignments</em></strong></p>';
console.log(strip_html_tags('str'));
