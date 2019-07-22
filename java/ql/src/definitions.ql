/**
 * @name Jump-to-definition links
 * @description Generates use-definition pairs that provide the data
 *              for jump-to-definition in the code viewer.
 * @kind definitions
 * @id java/jump-to-definition
 */

import java
import Definitions

from Element e, Element def, string kind
where
  def = definition(e, kind) and
  def.fromSource() and
  e.fromSource() and
  not dummyVarAccess(e) and
  not dummyTypeAccess(e)
select e, def, kind
