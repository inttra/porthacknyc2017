package org.hackathon.lcl.service.web;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.hackathon.lcl.vo.PoTrack;
import org.hackathon.lcl.vo.ObjectFactory;

import java.util.ArrayList;

@Controller
public class ServiceController
{
  @RequestMapping(value={"/search/{type}"}, method={RequestMethod.GET}, produces={"application/json"})
  @ResponseBody
  public  Object search(@PathVariable("type") int typeId)
  {
	  ArrayList<PoTrack> al= new ArrayList<PoTrack>(1);
	  al.add(ObjectFactory.newPoTrack(1,1,1,1,"839384749"));
      return al;
  }


/*  @RequestMapping(value={"/search"}, method={RequestMethod.POST}, consumes={"application/json"}, produces={"application/json"})
  @ResponseBody
  public SearchResponse search(@RequestBody SearchRequest req) {
    try {
      String content = new FileSchedule().getSchedule(req.getBrands(), req.getFrom(), req.getTo());

      return (SearchResponse)new ObjectMapper().readValue(content, SearchResponse.class);
    }
    catch (Exception e) {
      e.printStackTrace();
    }return ObjectFactory.newSearchResponse("NO_SERVICE");
  }

  @RequestMapping(value={"/search"}, method={RequestMethod.GET}, produces={"application/json"})
  @ResponseBody
  public SearchResponse search(@RequestParam("from") String from, @RequestParam("to") String to,
                @RequestParam("key") String key, @RequestParam("date") String date,
      @RequestParam(value="Search_Date_Qualifier", required=false) String search_date_qualifer) {
    try {
      String content = new FileSchedule().getSchedule("SUDU", from, to);

      return (SearchResponse)new ObjectMapper().readValue(content, SearchResponse.class);
    }
    catch (Exception e) {
      e.printStackTrace();
    }return ObjectFactory.newSearchResponse("NO_SERVICE");
  }*/
}

